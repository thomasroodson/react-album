import { Photo } from "../../types/Photo";

type Props = {
  data: Photo;
};

export const PhotoItem = ({ data }: Props) => {
  return (
    <div className="w-64 mx-2 mb-4 h-min">
      <img className="rounded" src={data.urls.small_s3} />
    </div>
  );
};
