export class LogosService {
    private logos = {
        'Champions League': '//cdn6.aptoide.com/imgs/4/2/8/428885c8dc7f3c9194b748250e1dea01_icon.png?w=256',
        'Premier League': '//cdn.iconscout.com/public/images/icon/free/png-256/the-premier-league-logo-311057103d3d6a1d-256x256.png',
        'Europa League': '//orig00.deviantart.net/f585/f/2015/201/5/c/uefa_europa_league_by_keshboy-d922i89.png',
    };

    selectLogo(competition) {
        return this.logos[competition];
    }
}
