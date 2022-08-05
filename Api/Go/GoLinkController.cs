using Microsoft.AspNetCore.Mvc;

namespace GoLinks.Api;

[ApiController]
[Route("[controller]")]
public class GoLinkController : Controller 
{
    private readonly GoLinkService _goLinkService;
    public GoLinkController(GoLinkService goLinkService)
    {
        _goLinkService = goLinkService;
    }
    // GET
    [HttpGet]
    [Route("{url}")]
    public string Index(string url)
    {
        return _goLinkService.GetUrlByName(url);
    } 
    
    [HttpGet]
    public IEnumerable<GoLink>GetAllGoLinks()
    {
        return _goLinkService.GetAllUrls().ToArray();
    }

    [HttpPost]
    public ActionResult CreateGoLink([FromBody] GoLink goLink)
    {
        // TODO: put right response
        return _goLinkService.CreateGoLink(goLink) ? Ok() : BadRequest();
    }

    [HttpDelete]
    public ActionResult DeleteGoLink([FromBody] GoLink goLink)
    {
        // TODO: put right response
        return _goLinkService.DeleteGoLink(goLink) ? Ok() : BadRequest();
    }
}