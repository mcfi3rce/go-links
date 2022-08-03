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
            return "https://localhost:44405/";
        }

        return goLink.target;
    }

    public List<GoLink> GetAllUrls()
    {
        return _goLinkRepository.FindAll();
    }
}