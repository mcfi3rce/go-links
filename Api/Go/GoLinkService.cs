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
        var goLink = _goLinkRepository.FindGoLinkBySource(url);
        return goLink.target;
    }

    public List<GoLink> GetAllUrls()
    {
        return _goLinkRepository.FindAll();
    }
}