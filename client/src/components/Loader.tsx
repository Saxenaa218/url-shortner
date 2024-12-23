import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const Loader: React.FC<{ fontSize: number }> = ({ fontSize }) => {
  return <Spin indicator={<LoadingOutlined style={{ fontSize }} spin />} />;
};

export default Loader;
