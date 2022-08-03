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
        _goLinkRepository.FindGoLinkBySource(url);
        return $"https://{url}.com";
    }

    public List<GoLink> GetAllUrls()
    {
        return _goLinkRepository.FindAll();
    }
}