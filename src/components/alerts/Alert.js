import React from 'react'

const Alert = () => {
    const styles = {
        container: {
            padding: "2rem",
            backgroundColor: "#27ae60",
            textAlign: "center",
            boxShadow: "3px 3px 3px rgba(0, 0, 0, .25)",
            marginBottom: "2rem",
        },
        span: {
            color: "white",
            fontWeight: "500",
            letterSpacing: ".05rem",
            fontSize: "18px",
            lineHeight: "1.5",
        }
    }
    return (
        <div style={styles.container}>
            <span style={styles.span}>Aquí van los componentes para tomar como referencias en diferentes proyectos. "./components"</span>
        </div>
    )
}

export default Alert;
