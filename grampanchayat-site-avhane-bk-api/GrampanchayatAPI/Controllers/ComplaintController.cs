using GrampanchayatAPI.Models;
using GrampanchayatAPI.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GrampanchayatAPI.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class ComplaintController : ControllerBase
  {
    private readonly EmailService _emailService;

    public ComplaintController(EmailService emailService)
    {
      _emailService = emailService;
    }

    [HttpPost]
    [RequestSizeLimit(5242880)] // 5MB
    public async Task<IActionResult> SendComplaint([FromForm] ComplaintRequest request)
    {
      await _emailService.SendComplaintEmail(request);

      return Ok(new { message = "Complaint submitted successfully" });
    }
  }
}
