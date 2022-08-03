using Microsoft.AspNetCore.Mvc;

namespace GoLinks.Api;

[ApiController]
[Route("[controller]")]
public class GoLinkController :  ControllerBase
{
    private readonly GoLinkService _goLinkService;
    public GoLinkController(GoLinkService goLinkService)
    {
        _goLinkService = goLinkService;
    }
    // GET
    [HttpGet]
    [Route("/url/{url}")]
    public RedirectResult Index(string url)
    {
        var redirect = _goLinkService.GetUrlByName(url);
        return Redirect(redirect);
    }
    
    [HttpGet]
    [Route("/urls")]
    public IEnumerable<GoLink>GetAllGoLinks()
    {
        return _goLinkService.GetAllUrls().ToArray();
    }
}