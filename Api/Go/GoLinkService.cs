namespace GoLinks.Api;

public class GoLinkService : IGoLinkService
{
    private readonly GoLinkRepository _goLinkRepository;
    public GoLinkService(GoLinkRepository goLinkRepository)
    {
        _goLinkRepository = goLinkRepository;
    } 
    public GoLink GetUrlByName(string url)
    {
        return _goLinkRepository.FindGoLinkBySource(url);
    }

    public List<GoLink> GetAllUrls()
    {
        return _goLinkRepository.FindAll();
    }

    public bool CreateGoLink(GoLink goLink)
    {
        // This is better than handing times client side 😬
        goLink.date_added = DateTime.Now;
        return _goLinkRepository.InsertGoLink(goLink);
    }

    public bool DeleteGoLink(GoLink goLink)
    {
        return _goLinkRepository.DeleteGoLinkBySource(goLink.user_name, goLink.source);
    }
}