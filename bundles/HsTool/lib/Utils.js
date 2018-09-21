let Utils = Utils || {};

Utils.pagination = {
    create: () => {
        var items = $(".js-paged-item");
        if (items.length < 10){
            jQuery("#pagination").pagination('destroy');
            return;
        }
        var numItems = items.length;
        var perPage = 9;

        // Only show the first 2 (or first `per_page`) items initially.
        items.slice(perPage).hide();
        jQuery("#pagination").pagination({
            items: numItems,
            itemsOnPage: perPage,
            edges: 0,

            // This is the actual page changing functionality.
            onPageClick: function(pageNumber) {
                var showFrom = perPage * (pageNumber - 1);
                var showTo = showFrom + perPage;

                // We'll first hide everything...
                items.hide()
                     // ... and then only show the appropriate rows.
                .slice(showFrom, showTo).show();
            }
        });
        jQuery("#pagination").pagination('selectPage', 1);
    },
    destroy: () => {
        jQuery("#pagination").pagination('destroy');
    },
    redraw: () => {
        jQuery("#pagination").pagination('redraw');
    },
    goToPage: (pageNumber) => {
        jQuery("#pagination").pagination('selectPage', pageNumber);
    }
}

Utils.showPopup = (ele) => {
    jQuery(ele).modal('show');
}

export default Utils;
