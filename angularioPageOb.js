let angularioPageOb = function () {
  this.getHome = $('[title="Home"]');
  this.getFeatures = $('a.nav-link[href="features"]');
  this.getResources = $('a.nav-link[href="resources"]');
  this.clickVerticalButton = $('button.hamburger.mat-button');
  this.getOpenMenu = $('aio-shell');
  this.Sidenav = $('mat-sidenav.sidenav.mat-sidenav');
  this.getGettingStarted = $('aio-nav-menu').$('[title="A gentle introduction to Angular."]');
  this.getJapan = element(by.css('.link[title="日本語版"]'));

};

module.exports = new angularioPageOb();