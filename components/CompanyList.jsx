const CompanyList = () => {
    return (
        <div
        id="content-two "
        className=" flex flex-col justify-between items-center space-y-3 absolute top-8 -left-2 text-mediumGray text-sm w-28 bg-white border shadow-3xl border-almostWhite py-3 rounded-lg"
      >
        <span className="cursor-pointer"> History</span>
        <span className="cursor-pointer">Our Team</span>
        <span className="cursor-pointer">Blog</span>
      </div>
    );
}

export default CompanyList;