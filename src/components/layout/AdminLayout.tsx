import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div>
      <h2>This is navbar</h2>
      <Outlet></Outlet>
    </div>
  );
};

export default AdminLayout;
