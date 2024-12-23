import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOriginalUrl } from "../controllers/getOriginalUrl";
import { Button, Result } from "antd";
import Loader from "./Loader";

const Redirector = () => {
  const { shortUrlId } = useParams();
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
    if (!shortUrlId) return;
    (async () => {
      try {
        const originalUrl = await getOriginalUrl(shortUrlId);
        const aTag = document.createElement("a");
        aTag.href = originalUrl;
        aTag.click();
      } catch {
        setHasError(true);
      }
    })();
  }, [shortUrlId]);

  return (
    <div className="py-40 px-10 md:px-20 lg:px-40">
      {hasError ? (
        <Result
          status="error"
          title="URL not found"
          extra={
            <Button type="primary" key="console">
              Retry
            </Button>
          }
        />
      ) : (
        <section className="flex gap-3">
          <h2>Redirecting</h2>
          <Loader fontSize={20} />
        </section>
      )}
    </div>
  );
};

export default Redirector;
