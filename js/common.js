$(function () {

    $('.accordion__header').on('click', function (e) {

        var $this = $(this);
        
        $(this).toggleClass('orange');
        
        $this.parent('.accordion').toggleClass('expanded');
        
        $this.next('.accordion__item').toggle();
        
        $this.parent('.accordion').siblings('.accordion').removeClass('expanded').find('.accordion__item').hide();
        
        $this.parent('.accordion').siblings('.accordion').removeClass('expanded').find('.accordion__header').removeClass('orange');
        
        e.stopPropagation();

    });

});
