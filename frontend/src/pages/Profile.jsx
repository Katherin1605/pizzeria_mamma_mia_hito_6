import React from 'react';

const Profile = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow">
            <div className="card-body text-center p-5">
              <div className="mb-4">
                <i className="fas fa-user-circle" style={{fontSize: '4rem', color: '#6c757d'}}></i>
              </div>
              <h3 className="card-title mb-4">Perfil de Usuario</h3>
              <div className="mb-4">
                <strong>Email:</strong>
                <p className="text-muted mt-2">usuario@mammamia.com</p>
              </div>
              <button 
                className="btn btn-danger btn-lg w-100" 
                onClick={() => {
                  // Por ahora es estático, se implementará la lógica en futuros hitos
                  alert('Cerrando sesión...');
                }}
              >
                <i className="fas fa-sign-out-alt me-2"></i>
                Cerrar Sesión
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;