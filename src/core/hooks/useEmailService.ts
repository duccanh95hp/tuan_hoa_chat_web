import emailjs from "emailjs-com";

export const useEmailService = () => {
  const sendEmailContact = (body: any) => {
    emailjs
      .send(
        "service_103rwd7",
        "template_xr1x7jo",
        {
          email: body.email,
          from_name: body.fullname,
          to_name: "Web hóa chất",
          number_phone: body.phone,
          message: body.note,
        },
        "Dkt2SK8OBPbmANuwy"
      )
      .then((response) => {
        console.log(response);
        alert("Email sent successfully!");
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send email");
      });
  };

  return {
    sendEmailContact,
  };
};
