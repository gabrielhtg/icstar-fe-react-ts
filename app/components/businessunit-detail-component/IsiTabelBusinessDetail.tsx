"use client";

const IsiTabelBusiness = (props: any) => {
  return (
    <>
      <tr>
        <td>{props.no}</td>
        <td>{props.account}</td>
        <td>{props.revenue}</td>
        <td>{props.gp}</td>
        <td>{props.status}</td>
        <td>{props.userUploader}</td>
        <td>{props.uploadTime}</td>
      </tr>
    </>
  );
};

export default IsiTabelBusiness;
