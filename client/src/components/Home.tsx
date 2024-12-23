import { useState } from "react";
import { Button, Input, message, Typography } from "antd";
import { generateShortUrl, validateUrl } from "../utils";
import { saveNewUrl } from "../controllers/saveNewUrl";
import Loader from "./Loader";

const Home = () => {
  const [result, setResult] = useState<{
    originalURL: string | null;
    shortUrlId: string | null;
  }>({
    originalURL: null,
    shortUrlId: null,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleProcess = (e) => {
    e.preventDefault();
    const isUrlCorrect = validateUrl(e.target[0].value);
    if (isUrlCorrect) {
      setIsLoading(true);
      (async () => {
        try {
          const {
            data: { originalURL, shortUrlId },
          } = await saveNewUrl(e.target[0].value);
          setResult({ originalURL, shortUrlId });
        } catch {
          setResult({
            originalURL: null,
            shortUrlId: null,
          });
        } finally {
          setIsLoading(false);
        }
      })();
    } else {
      message.open({
        type: "warning",
        content: "Please share a valid URL",
      });
    }
  };

  return (
    <div className="w-full py-40 px-10 md:px-20 lg:px-40">
      <h1 className="text-5xl mb-10 text-center">Create Short URL</h1>
      <form onSubmit={handleProcess} className="flex items-center gap-5">
        <Input placeholder="paste your url" size="large" autoFocus />
        <Button type="primary" htmlType="submit" size="large">
          Create URL
        </Button>
      </form>
      <section className="mt-5">
        {isLoading ? (
          <Loader fontSize={28} />
        ) : (
          <section>
            {result.shortUrlId && (
              <section className="flex justify-center">
                <span className="mr-2 font-bold">URL:</span>
                <Typography.Paragraph copyable className="text-base">
                  {generateShortUrl(result.shortUrlId)}
                </Typography.Paragraph>
              </section>
            )}
          </section>
        )}
      </section>
    </div>
  );
};

export default Home;
