using GrampanchayatAPI.Models;
using GrampanchayatAPI.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GrampanchayatAPI.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class ContactController : ControllerBase
  {
    private readonly EmailService _emailService;

    public ContactController(EmailService emailService)
    {
      _emailService = emailService;
    }

    [HttpPost]
    public async Task<IActionResult> SendContact([FromBody] ContactRequest request)
    {
      if (request == null)
        return BadRequest();

      await _emailService.SendContactEmail(request);

      return Ok(new { message = "Email sent successfully" });
    }
  }
}
