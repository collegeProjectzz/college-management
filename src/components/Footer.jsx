export default function Footer() {
  return (
    <footer className="flex justify-center
    items-center w-full p-8">
      <div className="flex flex-col justify-center
    items-center">
        <span>
          {new Date().getFullYear()} © Classroom
        </span>
        <span>
          made with
          <span className="text-red-600 m-1">
            &hearts;
          </span>
          by
          <span className="text-blue-700 ml-1">
            alroy
          </span>
          and
          <span className="text-blue-700 ml-1">
            siddhesh
          </span>
        </span>
      </div>
    </footer>
  );
};

