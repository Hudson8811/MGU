//search persons
jQuery(function ($) {

});

var allowWhile = true;
$(window).on('load', function () {
    calcualteLongImages();
    $(window).on('resize', function () {
        allowWhile = false;
        calcualteLongImages();
    })
});


function calcualteLongImages() {
    let additionalMargin = 25;
    $('.overpaste').remove();
    $('.overpasteTemp').remove();
    if ($(window).innerWidth() <= 700) return false;
    $('.oversize').each(function () {
        let imgDom = $(this);
        let newImg = new Image();
        newImg.src = imgDom.attr('src');
        let width = newImg.naturalWidth;
        let height = newImg.naturalHeight;

        imgDom.css({ 'width': width });

        let currentRealWidth = imgDom.innerWidth();
        let currentRealHeight = imgDom.innerHeight();

        let leftColung = $('.block__text__wrap .column__left')
        let leftColungWidth = leftColung.outerWidth();
        let leftColungmargin = parseInt(leftColung.css('margin-right'))

        let imgTopPosition = imgDom.position().top;

        let newWidht = currentRealWidth - leftColungWidth - leftColungmargin;

        let textBlocks = $('.block__text__wrap .block__textTwo').children().not('br, .block-text__mob');

        let startCollision = false;
        textBlocks.each(function () {
            let textBlock = $(this);

            let textBlockOffset = textBlock.position();
            let textBlockWidth = textBlock.innerWidth();
            let textBlockHeight = textBlock.innerHeight();

            if (
                newWidht > textBlockOffset.left &&
                newWidht < textBlockWidth &&
                imgTopPosition < textBlockOffset.top + textBlockHeight &&
                imgTopPosition + currentRealHeight > textBlockOffset.top
            ) {
                if (!startCollision) startCollision = true;

                let blankHeight, polygon, blankTop;
                let targetWidth = newWidht + additionalMargin;
                if (targetWidth > textBlockWidth) targetWidth = textBlockWidth;
                let targetHeight = textBlockHeight;


                $('<div>').attr('class', 'overpasteTemp').css({
                    'width': targetWidth,
                    'height': targetHeight,
                }).prependTo(textBlock);

                let tempBlock = textBlock.find('.overpasteTemp');
                allowWhile = true;
                let i = 0;
                while (textBlock.innerHeight() > tempBlock.innerHeight() && allowWhile && i < 10) {
                    targetHeight += additionalMargin;
                    tempBlock.css('height', targetHeight);
                    textBlockHeight = textBlock.innerHeight()
                    i++;
                }

                tempBlock.remove();


                if (imgTopPosition + currentRealHeight > textBlockOffset.top + textBlockHeight && imgTopPosition > textBlockOffset.top) {
                    blankHeight = textBlockOffset.top + textBlockHeight - imgTopPosition;
                    blankTop = textBlockHeight - blankHeight;
                    polygon = `polygon(0px ${blankTop}px, ${targetWidth}px ${blankTop}px, ${targetWidth}px ${targetHeight}px, 0px ${targetHeight}px)`;
                } else if (imgTopPosition + currentRealHeight < textBlockOffset.top + textBlockHeight && imgTopPosition <= textBlockOffset.top) {
                    blankHeight = imgTopPosition + currentRealHeight - textBlockOffset.top;
                    blankTop = 0;
                    polygon = `polygon(0px ${blankTop}px, ${targetWidth}px ${blankTop}px, ${targetWidth}px ${blankHeight}px, 0px ${blankHeight}px)`;
                } else {
                    blankTop = 0;
                    polygon = `polygon(0px ${blankTop}px, ${targetWidth}px ${blankTop}px, ${targetWidth}px ${targetHeight}px, 0px ${targetHeight}px)`;
                }

                $('<div>').attr('class', 'overpaste').css({
                    'width': targetWidth,
                    'height': targetHeight,
                    'shape-outside': polygon
                }).prependTo(textBlock);
            } else {
                if (startCollision) return false;
            }
        });
        imgDom.addClass('calculated');
    });
}
function bodyNoScroll() {
    let bodyBodymotionless = document.querySelector('body')
    bodyBodymotionless.classList.add("Bodymotionless")

}
function bodyYesScroll() {
    let bodyBodymotionless = document.querySelector('body')
    bodyBodymotionless.classList.remove("Bodymotionless")
}