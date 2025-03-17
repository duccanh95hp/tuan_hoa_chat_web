import { styled } from "../../../shared/styles";
import { StyledCollapse, StyledPageWapper } from "../../layouts/styles";
// import ContactImg from "../../../shared/assets/img-contact/contactImg.png";
import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import TextArea from "antd/es/input/TextArea";
import { useEmailService } from "../../../core/hooks/useEmailService";

const StyledContactWapper = styled("div", {
  display: "flex",
  justifyContent: "center", // Căn giữa theo chiều ngang
  alignItems: "center", // Căn giữa theo chiều dọc
  height: "100vh", // Để căn giữa toàn bộ màn hình
  "@media (max-width: 765px)": {
    width: "100%",
  },
});

const StyledContactItem = styled("div", {
  width: "48%",
  "@media (max-width: 765px)": {
    width: "100%",
  },
});
// const StyledContactImg = styled("img", {
//   width: "100%",
// });

const StyledFormWapper = styled(Form, {
  paddingTop: "24px",
});

const StyledBtn = styled(Button, {
  marginTop: "24px",
  color: "white",
  border: "none",
  background: "#006db3",
  fontWeight: "500",
  fontSize: "16px",
  borderRadius: "unset",
  "&:hover": {
    color: "white !important",
    border: "none",
    background: "#006db3 !important",
  },
});

const Contact = () => {
  const [form] = useForm();

  const { sendEmailContact } = useEmailService();

  const onSubmit = () => {
    form
      .validateFields()
      .then((e) => sendEmailContact(e))
      .catch((e) => console.log(e));
  };

  return (
    <StyledPageWapper>
      <StyledContactWapper>
        <StyledContactItem>
          <StyledCollapse style={{ width: "unset" }}>
            <div>LIÊN HỆ VỚI CHÚNG TÔI</div>
          </StyledCollapse>
          <StyledFormWapper layout="vertical" form={form}>
            <Form.Item
              name={"fullname"}
              label="Họ và tên"
              required
              rules={[
                {
                  required: true,
                  message: "Đây là trường bắt buộc",
                },
              ]}
            >
              <Input style={{  }} />
            </Form.Item>
            <Form.Item
              name={"email"}
              label="Địa chỉ email"
              required
              rules={[
                {
                  required: true,
                  message: "Đây là trường bắt buộc",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={"phone"}
              label="Số điện thoại"
              required
              rules={[
                {
                  required: true,
                  message: "Đây là trường bắt buộc",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item name={"note"} label="Nội dung">
              <TextArea />
            </Form.Item>
            <StyledBtn onClick={onSubmit}>Gửi</StyledBtn>
          </StyledFormWapper>
        </StyledContactItem>
        {/* <StyledContactItem>
          <StyledContactImg src={ContactImg} />
        </StyledContactItem> */}
      </StyledContactWapper>
    </StyledPageWapper>
  );
};

export default Contact;
