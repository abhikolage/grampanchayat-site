using GrampanchayatAPI.Models;
using MimeKit;
using MailKit.Net.Smtp;
using System.Text.Json;
using System.Text;

namespace GrampanchayatAPI.Services
{
  public class EmailService
  {
    private readonly IConfiguration _config;
    private readonly HttpClient _httpClient;

    public EmailService(IConfiguration config, HttpClient httpClient)
    {
      _config = config;
      _httpClient = httpClient;
    }


    public async Task SendContactEmail(ContactRequest request)
    {
      var apiKey = _config["EmailSettings:ApiKey"];
      var senderEmail = _config["EmailSettings:SenderEmail"];
      var senderName = _config["EmailSettings:SenderName"];

      var receivers = _config
          .GetSection("EmailSettings:ReceiverEmails")
          .Get<string[]>();

      var emailBody = $@"
                <h3>{request.Name} संपर्क करत आहे</h3>
                <p><b>पूर्ण नाव:</b> {request.Name}</p>
                <p><b>ईमेल:</b> {request.Email}</p>
                <p><b>मोबाईल नंबर:</b> {request.Mobile}</p>
                <p><b>विषय:</b> {request.Subject}</p>
                <p><b>संदेश:</b> {request.Message}</p>";

      var payload = new
      {
        sender = new
        {
          name = senderName,
          email = senderEmail
        },

        to = receivers.Select(x => new { email = x }),

        //replyTo = new
        //{
        //  email = request.Email,
        //  name = request.Name
        //},

        subject = $"संपर्क - {request.Subject} - {DateTime.Now:HH:mm:ss}",

        htmlContent = emailBody
      };

      var json = JsonSerializer.Serialize(payload);

      var requestMessage = new HttpRequestMessage(
          HttpMethod.Post,
          "https://api.brevo.com/v3/smtp/email"
      );

      requestMessage.Headers.Add("api-key", apiKey);

      requestMessage.Content =
          new StringContent(json, Encoding.UTF8, "application/json");

      var response = await _httpClient.SendAsync(requestMessage);

      if (!response.IsSuccessStatusCode)
      {
        var error = await response.Content.ReadAsStringAsync();
        throw new Exception(error);
      }
    }
    //public async Task SendContactEmail(ContactRequest request)
    //{
    //  var email = new MimeMessage();

    //  email.From.Add(new MailboxAddress(
    //      _config["SmtpSettings:SenderName"],
    //      _config["SmtpSettings:SenderEmail"]
    //  ));

    //  var receivers = _config
    // .GetSection("SmtpSettings:ReceiverEmails")
    // .Get<string[]>();

    //  foreach (var emailAddress in receivers)
    //  {
    //    email.To.Add(MailboxAddress.Parse(emailAddress));
    //  }

    //  email.Subject = $"संपर्क - {request.Subject} - {DateTime.Now:HH:mm:ss}";

    //  var builder = new BodyBuilder();

    //  builder.HtmlBody = $@"
    //            <h3>{request.Name} संपर्क करत आहे</h3>
    //            <p><b>पूर्ण नाव:</b> {request.Name}</p>
    //            <p><b>ईमेल:</b> {request.Email}</p>
    //            <p><b>मोबाईल नंबर:</b> {request.Mobile}</p>
    //            <p><b>विषय:</b> {request.Subject}</p>
    //            <p><b>संदेश:</b> {request.Message}</p>
    //        ";

    //  email.Body = builder.ToMessageBody();

    //  using var smtp = new SmtpClient();
    //  Console.WriteLine("Before SMTP Connect");

    //  await smtp.ConnectAsync(
    //      _config["SmtpSettings:Server"],
    //      int.Parse(_config["SmtpSettings:Port"]),
    //      MailKit.Security.SecureSocketOptions.StartTls
    //  );
    //  Console.WriteLine("After SMTP Connect");

    //  await smtp.AuthenticateAsync(
    //      _config["SmtpSettings:Username"],
    //      _config["SmtpSettings:Password"]
    //  );
    //  Console.WriteLine("After SMTP Authentication");


    //  await smtp.SendAsync(email);
    //  Console.WriteLine("After Mail Sending");

    //  await smtp.DisconnectAsync(true);
    //}

    //public async Task SendComplaintEmail(ComplaintRequest request)
    //{
    //  var email = new MimeMessage();

    //  email.From.Add(new MailboxAddress(
    //      _config["SmtpSettings:SenderName"],
    //      _config["SmtpSettings:SenderEmail"]
    //  ));


    //  var receivers = _config
    //.GetSection("SmtpSettings:ReceiverEmails")
    //.Get<string[]>();

    //  foreach (var emailAddress in receivers)
    //  {
    //    email.To.Add(MailboxAddress.Parse(emailAddress));
    //  }

    //  email.Subject = $"नवीन तक्रार - {request.Subject} - {DateTime.Now:HH:mm:ss}";

    //  var builder = new BodyBuilder();

    //  builder.HtmlBody = $@"
    //    <h3>{request.Name} नवीन तक्रार नोंदवत आहेत</h3>
    //    <p><b>पूर्ण नाव:</b> {request.Name}</p>
    //    <p><b>फोन नंबर:</b> {request.Phone}</p>
    //    <p><b>ईमेल:</b> {request.Email}</p>
    //    <p><b>आधार क्रमांक:</b> {request.Aadhaar}</p>
    //    <p><b>पत्ता:</b> {request.Address}</p>
    //    <p><b>तक्रारीचा विषय:</b> {request.Subject}</p>
    //    <p><b>तक्रारीचे सविस्तर वर्णन:</b> {request.Message}</p>
    //";

    //  if (request.Photo != null)
    //  {
    //    using var ms = new MemoryStream();
    //    await request.Photo.CopyToAsync(ms);

    //    builder.Attachments.Add(
    //        request.Photo.FileName,
    //        ms.ToArray(),
    //        ContentType.Parse(request.Photo.ContentType)
    //    );
    //  }

    //  email.Body = builder.ToMessageBody();

    //  using var smtp = new MailKit.Net.Smtp.SmtpClient();

    //  await smtp.ConnectAsync(
    //      _config["SmtpSettings:Server"],
    //      int.Parse(_config["SmtpSettings:Port"]),
    //      MailKit.Security.SecureSocketOptions.StartTls
    //  );

    //  await smtp.AuthenticateAsync(
    //      _config["SmtpSettings:Username"],
    //      _config["SmtpSettings:Password"]
    //  );

    //  await smtp.SendAsync(email);

    //  await smtp.DisconnectAsync(true);
    //}

    public async Task SendComplaintEmail(ComplaintRequest request)
    {
      var apiKey = _config["EmailSettings:ApiKey"];
      var senderEmail = _config["EmailSettings:SenderEmail"];
      var senderName = _config["EmailSettings:SenderName"];

      var receivers = _config
          .GetSection("EmailSettings:ReceiverEmails")
          .Get<string[]>();

      var emailBody = $@"
    <h3>{request.Name} नवीन तक्रार नोंदवत आहेत</h3>
    <p><b>पूर्ण नाव:</b> {request.Name}</p>
    <p><b>फोन नंबर:</b> {request.Phone}</p>
    <p><b>ईमेल:</b> {request.Email}</p>
    <p><b>आधार क्रमांक:</b> {request.Aadhaar}</p>
    <p><b>पत्ता:</b> {request.Address}</p>
    <p><b>तक्रारीचा विषय:</b> {request.Subject}</p>
    <p><b>तक्रारीचे सविस्तर वर्णन:</b> {request.Message}</p>
    ";

      var toList = receivers.Select(x => new { email = x }).ToArray();

      object attachments = null;

      if (request.Photo != null)
      {
        using var ms = new MemoryStream();
        await request.Photo.CopyToAsync(ms);

        attachments = new[]
        {
            new
            {
                name = request.Photo.FileName,
                content = Convert.ToBase64String(ms.ToArray())
            }
        };
      }

      var payload = new
      {
        sender = new
        {
          name = senderName,
          email = senderEmail
        },

        to = toList,

        //replyTo = new
        //{
        //  email = request.Email,
        //  name = request.Name
        //},

        subject = $"नवीन तक्रार - {request.Subject} - {DateTime.Now:HH:mm:ss}",

        htmlContent = emailBody,

        attachment = attachments
      };

      var json = JsonSerializer.Serialize(payload);

      var requestMessage = new HttpRequestMessage(
          HttpMethod.Post,
          "https://api.brevo.com/v3/smtp/email"
      );

      requestMessage.Headers.Add("api-key", apiKey);

      requestMessage.Content = new StringContent(
          json,
          Encoding.UTF8,
          "application/json"
      );

      var response = await _httpClient.SendAsync(requestMessage);

      if (!response.IsSuccessStatusCode)
      {
        var error = await response.Content.ReadAsStringAsync();
        throw new Exception(error);
      }
    }
  }
}
