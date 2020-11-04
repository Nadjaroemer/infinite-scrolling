var observer = new IntersectionObserver(function(entries) {
    //console.log(entries);
    if (entries[0].intersectionRatio <= 0) return;
    
    observer.unobserve(entries[0].target);
    offset = offset + 10;
    
    if (offset > count) return;
    
    catchEmAll(offset);

}, {threshold: 1});