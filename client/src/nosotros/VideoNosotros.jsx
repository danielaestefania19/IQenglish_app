
const VideoNosotros = () => {
  return (
    <div className="flex justify-center items-center mb-12">
      <video className="h-[30rem] max-w-full border border-gray-200 rounded-lg dark:border-gray-700" controls>
        <source src="https://gateway.pinata.cloud/ipfs/QmVLsyt5rZYqHrs5xPNqtiiaKoUtj6HWipKgXEwy4BXrU4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoNosotros;
