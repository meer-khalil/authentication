import { useAuth } from "../context/AuthContext";

function Dashboard() {
    const { user } = useAuth();
  
    const handleLogout = () => {
      window.location.href = 'http://localhost:5000/api/logout';
    };
  
    const getProviderColor = (provider) => {
      switch (provider) {
        case 'google': return 'text-red-600';
        case 'facebook': return 'text-blue-600';
        case 'github': return 'text-gray-800';
        default: return 'text-gray-600';
      }
    };
  
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center ">
                {user?.picture && (
                  <img
                    src={user.picture}
                    alt="Profile"
                    className="h-12 w-12 rounded-full mr-4"
                  />
                )}
                <div>
                  <h1 className="text-2xl font-bold">{user?.name}</h1>
                  <p className="text-gray-600">{user?.email}</p>
                  <p className={`text-sm ${getProviderColor(user?.provider)}`}>
                    Signed in with {user?.provider?.charAt(0).toUpperCase() + user?.provider?.slice(1)}
                  </p>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Logout
              </button>
            </div>
            <div className="border-t pt-6">
              <h2 className="text-xl font-semibold mb-4">Dashboard Content</h2>
              <p className="text-gray-600">
                Welcome to your dashboard! You're successfully authenticated.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default Dashboard;