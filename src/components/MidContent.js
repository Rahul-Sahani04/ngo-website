const MidContent = ({data}) => {

    return (
        <div
        className={`w-full  text-white relative bg-[var(--primary-color)] flex flex-col justify-evenly items-center p-4 gap-2
               transition-all duration-300 ease-in-out
              `}
        style={{
          height: "calc(70vh - 120px)",
        }}>
        <div className="flex flex-row justify-evenly items-center gap-6 mx-32">
        {data && data.map((item, index) => (
          <div key={index} >
            <h2 className="text-2xl font-bold text-left">
                {item.title}
            </h2>
            <p className=" text-left mt-4">
                {item.description}
            </p>
          </div>
        ))}
        </div>
      </div>
    )
}

export default MidContent;