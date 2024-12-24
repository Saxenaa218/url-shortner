import {
  Button,
  Result,
  Table,
  TableColumnsType,
  Tooltip,
  Typography,
} from "antd";
import { useAllUrlObjects } from "../hooks/useAllUrlObjects";
import Loader from "./Loader";
import { generateShortUrl } from "../utils";
import { DeleteFilled } from "@ant-design/icons";

interface DataType {
  originalURL: string;
  shortUrlId: string;
  createdAt: string;
}

const Admin = () => {
  const { data, isLoading, hasError, fetchAllUrls, deleteUrl } =
    useAllUrlObjects();

  const columns: TableColumnsType<DataType> = [
    {
      title: "Original URL",
      dataIndex: "originalURL",
      render: (originalURL) => (
        <Typography.Paragraph copyable>{originalURL}</Typography.Paragraph>
      ),
    },
    {
      title: "Short URL ID",
      dataIndex: "shortUrlId",
      render: (shortUrlId) => (
        <Typography.Paragraph copyable>
          {generateShortUrl(shortUrlId)}
        </Typography.Paragraph>
      ),
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      render: (createdAt) => (
        <Tooltip title={createdAt}>
          {new Date(createdAt).toLocaleString()}
        </Tooltip>
      ),
    },
    {
      title: "Options",
      dataIndex: "options",
      render: (_, item) => {
        return (
          <Button
            onClick={() => deleteUrl(item.originalURL)}
            icon={<DeleteFilled />}
            title="Delete URL"
          />
        );
      },
    },
  ];

  if (isLoading) {
    return <Loader fontSize={48} />;
  }

  if (hasError) {
    return (
      <Result
        status="warning"
        title="Unable to fetch data"
        extra={
          <Button type="primary" key="console" onClick={fetchAllUrls}>
            Retry
          </Button>
        }
      />
    );
  }

  return (
    <section className="p-10">
      <h1 className="text-5xl font-semibold text-center mb-10">Admin Panel</h1>
      <Table<DataType>
        dataSource={data}
        columns={columns}
        rowKey={(record) => record.shortUrlId}
        pagination={{ pageSize: 10 }}
      />
    </section>
  );
};

export default Admin;
