"use client";

const IsiTabelPipeline = (props: any) => {
  const formatRupiah = (number: any) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  return (
    <>
      <tr>
        <td>{props.no}</td>
        <td>{props.businessUnit}</td>
        <td>{props.account}</td>
        <td>{formatRupiah(props.revenue)}</td>
        <td>{formatRupiah(props.gp)}</td>
        <td>{props.userUploader}</td>
        <td>{props.uploadTime}</td>
      </tr>
    </>
  );
};

export default IsiTabelPipeline;
