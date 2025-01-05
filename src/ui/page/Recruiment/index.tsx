// import { Job_Description } from "../../../core/data/recruiment";
import { styled } from "../../../shared/styles";
import { HeadingPage } from "../../layouts/function/HeadingPage";
import { StyledPageWapper } from "../../layouts/styles";

const StyledRecruimentWapper = styled("div", {
  ".text-bold": {
    fontWeight: "bold",
  },
});

const StyledTableWapper = styled("table", {
  marginTop: "24px",
  width: "100%",
  td: {
    padding: ".5em",
    textAlign: "left",
    borderBottom: " 1px solid #ececec",
    fontSize: ".9em",
    lineHeight: "18px",
  },
});

const Recruiment = () => {
  return (
    <StyledPageWapper>
      <HeadingPage title="TUYỂN DỤNG" />
      <StyledRecruimentWapper>
        Để đáp ứng nhu cầu phát triển,{" "}
        <span className="text-bold">Trọng Tuấn Chemical</span> cần tuyển nhân sự làm việc
        tại vị trí{" "}
        <span className="text-bold">Nhân viên kinh doanh khu vực Miền Bắc</span>{" "}
        với yêu cầu cụ thể như sau:
        <StyledTableWapper>
          {/* {Job_Description.sections.map((section, index) => (
            <tr key={index}>
              <td width="40">
                <strong>{section.index}</strong>
              </td>
              <td>
                <strong>{section.title}</strong>
                {section.index === "I" ? (
                  <ol>
                    {section.content.map((item, idx) => (
                      <li key={idx}>
                        <>ưe{item.value}</>
                      </li>
                    ))}
                  </ol>
                ) : (
                  ""
                )}
              </td>
            </tr>
          ))} */}
          <tbody>
            <tr>
              <td width="38">
                <strong>TT</strong>
              </td>
              <td>
                <strong>NỘI DUNG</strong>
              </td>
            </tr>

            <tr>
              <td width="38">
                <strong>I</strong>
              </td>
              <td>
                <strong>Thông tin tuyển dụng:</strong>
                <p></p>
                <ol>
                  <li>
                    Vị trí tuyển dụng:&nbsp;
                    <strong>Nhân viên kinh doanh&nbsp;</strong>
                  </li>
                  <li>Số lượng: 02 người</li>
                  <li>
                    Địa điểm làm việc:{" "}
                    <strong>
                      Số 46 Biệt thự 1 X2 – Khu đô thị Bắc Linh Đàm – Hoàng Mai
                      – Hà Nội
                    </strong>
                  </li>
                </ol>
              </td>
            </tr>
            <tr>
              <td width="38">
                <strong>II</strong>
              </td>
              <td>
                <strong>Mô tả công việc:</strong>
                <p></p>
                <ol>
                  <li>
                    <strong>Nhiệm vụ chính:</strong>
                  </li>
                </ol>
                <p>
                  –&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Tìm
                  kiếm, tư vấn và thuyết phục khách hàng sử dụng sản phẩm và
                  dịch vụ của công ty
                </p>
                <p>
                  –&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Chịu
                  trách nhiệm bán hàng trong khu vực được giao
                </p>
                <p>
                  –&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Đàm
                  phán, kí kết các đơn đặt hàng/ hợp đồng.
                </p>
                <p>
                  –&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Xây
                  dựng và duy trì mối quan hệ chặt chẽ với khách hàng hiện có và
                  phát triển mạng lưới khách hàng mới để đạt doanh số bán hàng
                  được giao
                </p>
                <p>
                  –&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Đề ra
                  các kế hoạch bán hàng và các hoạt động dịch vụ nhằm đạt được
                  kế hoạch và doanh số bán hàng trong khu vực được giao.
                </p>
                <p>
                  –&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Công
                  tác – báo cáo và phối hợp khác theo yêu cầu.
                </p>
                <p>
                  2.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <strong>Lập các báo cáo</strong>
                  <strong>:</strong>
                </p>
                <p>
                  –&nbsp;&nbsp;&nbsp; Lập các báo cáo công việc theo quy định
                  của công ty.
                </p>
                <ol>
                  <li>
                    <strong>Một số công tác khác:</strong>
                  </li>
                </ol>
                <p>
                  –&nbsp;&nbsp;&nbsp; Phối hợp với các cá nhân khác trong đơn vị
                  và trong Công ty tổ chức các sự kiện, xây dựng văn hóa doanh
                  nghiệp, đề xuất các giải pháp nhằm nâng cao chất lượng dịch
                  vụ, hình ảnh, uy tín của Công ty;
                </p>
                <p>
                  –&nbsp;&nbsp;&nbsp;&nbsp; Thực hiện các công việc khác có liên
                  quan theo yêu cầu của cấp trên
                </p>
              </td>
            </tr>
            <tr>
              <td width="38">
                <strong>III</strong>
              </td>
              <td>
                <strong>Tiêu chuẩn tuyển dụng:</strong>
                <p></p>
                <p>
                  <strong>– Trình độ:&nbsp;</strong>
                </p>
                <p>– Tốt nghiệp Cao đẳng trở lên</p>
                <p>
                  – Chuyên ngành Kinh tế, Thương mại, Hóa học, Sinh học, Môi
                  trường
                </p>
                <p>
                  –&nbsp;<strong>Kinh nghiệm</strong>: Có tối thiểu 01 năm kinh
                  nghiệm kinh doanh, bán hàng.
                </p>
                <p>
                  Ưu tiên ứng viên có kinh nghiệm làm việc tại công ty hóa chất,
                  thiết bị
                </p>
                <p>
                  –&nbsp;<strong>Kỹ năng cần thiết</strong>:
                </p>
                <p>
                  –&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kỹ năng giao
                  tiếp: Đàm phán, thương lượng
                </p>
                <p>
                  –&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kỹ năng làm
                  việc nhóm
                </p>
                <p>
                  –&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kỹ năng lập
                  mục tiêu và quản lý công việc cá nhân
                </p>
                <p>
                  –&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kỹ năng quản
                  lý công việc, quản lý thời gian, lập kế hoạch
                </p>
                <p>
                  –&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Có ngoại ngữ
                  là một lợi thế
                </p>
              </td>
            </tr>
            <tr>
              <td width="38">
                <strong>IV</strong>
              </td>
              <td>
                <strong>Thu nhập và phúc lợi:</strong>
                <p></p>
                <p>
                  – Thu nhập khởi điểm: thỏa thuận tùy theo kinh nghiệm và năng
                  lực của ứng viên;
                </p>
                <p>– Chế độ BHXH. BHYT, BHTN đầy đủ;</p>
                <p>
                  – Chế độ nâng lương định kỳ và đột xuất theo hiệu quả công
                  việc;
                </p>
                <p>
                  – Thưởng hiệu quả công tác theo quý, năm thưởng tháng lương
                  thứ 13;
                </p>
                <p>
                  – Chính sách phúc lợi khác: Chế độ ăn ca, tham quan du lịch
                  hàng năm, nghỉ lễ, phép, thăm hỏi theo quy định của Công ty;
                </p>
                <p>
                  – Văn hóa Công ty chuyên nghiệp và nhiều cơ hội phát triển.
                </p>
              </td>
            </tr>
            <tr>
              <td width="38">
                <strong>V</strong>
              </td>
              <td>
                <strong>Hồ sơ dự tuyển bao gồm</strong>
                <p></p>
                <p>
                  1.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Thông tin
                  ứng viên theo mẫu của &nbsp;Trọng Tuấn Chemical
                </p>
                <p>
                  2.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sơ yếu lý
                  lịch cá nhân;
                </p>
                <p>
                  3.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Thẻ căn
                  cước hoặc giấy CMND;
                </p>
                <p>
                  4.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Văn bằng,
                  chứng chỉ có liên quan.
                </p>
                <p>
                  <strong>Thời hạn và địa điểm nộp hồ sơ</strong>
                </p>
                <p>
                  Ø&nbsp;&nbsp;
                  <strong>
                    <em>
                      <u>Nộp hồ sơ trực tiếp</u>
                    </em>
                  </strong>
                  <em>: </em>Văn phòng Công ty
                </p>
                <p>
                  Ø&nbsp;&nbsp;
                  <strong>
                    <em>
                      <u>Qua địa chỉ email</u>
                    </em>
                  </strong>
                  :{" "}
                  <a href="sale@Trọng Tuấn Chemical.com.vn">
                    <strong>sale@Trọng Tuấn Chemical.com.vn </strong>
                  </a>
                  (khuyến khích nộp hồ sơ qua email).
                </p>
                <p>
                  Ø&nbsp;&nbsp;
                  <strong>
                    <em>
                      <u>Thời gian nhận hồ sơ</u>
                    </em>
                  </strong>
                  : Đến hết ngày 30/10/2022
                </p>
                <p>
                  Ø&nbsp;&nbsp;
                  <strong>
                    <em>
                      <u>Số điện thoại liên lạc:&nbsp;</u>
                    </em>
                  </strong>
                  Ứng viên quan tâm có thể liên lạc số điện thoại&nbsp;
                  <a href="tel: 0932323391">
                    <strong>0932323391</strong>{" "}
                  </a>
                  – Gặp Mr. Khánh
                </p>
                <p>
                  <strong>
                    <u>Lưu ý:</u>
                  </strong>
                </p>
                <p>
                  –&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <strong>
                    <em>Chấp nhận hồ sơ phô tô.</em>
                  </strong>
                </p>
                <p>
                  –&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <strong>
                    <em>Ưu tiên các ứng viên nộp hồ sơ sớm.</em>
                  </strong>
                </p>
                <p>
                  –&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <strong>
                    <em>
                      Hồ sơ không hoàn lại và chỉ thông báo với các ứng viên đạt
                      yêu cầu.
                    </em>
                  </strong>
                </p>
              </td>
            </tr>
          </tbody>
        </StyledTableWapper>
      </StyledRecruimentWapper>
    </StyledPageWapper>
  );
};

export default Recruiment;
