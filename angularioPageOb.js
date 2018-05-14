function angularioPageOb() {
    return {
        LeftButton: $('button.hamburger.mat-button'),
        OpenMenu: $('aio-shell'),
        Side: $('mat-sidenav.sidenav.mat-sidenav'),
        getHome: $('a.nav-link.home[href="/"]'),
        getFeatures: $('a.nav-link[href="features"]'),
        getResources: $('a.nav-link[href="resources"]'),
        GettingStarted: $('aio-nav-menu').$('[title="A gentle introduction to Angular."]'),
        getJapan: $('.link[title="日本語版"]'),
    };
}

module.exports = new angularioPageOb();