namespace GrampanchayatAPI.Models
{
  public class ComplaintRequest
  {
    public string Name { get; set; }

    public string Phone { get; set; }

    public string Email { get; set; }

    public string Aadhaar { get; set; }

    public string Address { get; set; }

    public string Subject { get; set; }

    public string Message { get; set; }

    public IFormFile? Photo { get; set; }
  }
}
