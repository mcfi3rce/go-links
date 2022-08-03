using Microsoft.AspNetCore.Mvc;

namespace GoLinks.Api;

[ApiController]
[Route("[controller]")]
public class GoController : Controller 
{
    private readonly GoLinkService _goLinkService;
    public GoController(GoLinkService goLinkService)
    {
        _goLinkService = goLinkService;
    }
    // GET
    [HttpGet]
    [Route("[action]")]
    public RedirectResult Index(string url)
    {
        var redirect = _goLinkService.GetUrlByName(url);
        return Redirect(redirect);
    } 
    
    [HttpGet]
    public IEnumerable<GoLink>GetAllGoLinks()
    {
        return _goLinkService.GetAllUrls().ToArray();
    }
}