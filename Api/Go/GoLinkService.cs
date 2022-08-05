namespace GoLinks.Api;

public class GoLinkService : IGoLinkService
{
    private readonly GoLinkRepository _goLinkRepository;
    public GoLinkService(GoLinkRepository goLinkRepository)
    {
        _goLinkRepository = goLinkRepository;
    } 
    public string GetUrlByName(string url)
    {
        GoLink goLink;
        try
        {
            goLink = _goLinkRepository.FindGoLinkBySource(url);
        }
        catch (Exception)
        {
            // TODO: figure out how not to hardcode this... 
            return "https://localhost:44405/";
        }

        return goLink.target;
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