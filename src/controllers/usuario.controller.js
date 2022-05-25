import { pool } from '../database'

export const getUsuarios = async (req, res) => {
    try {
        const response = await pool.query('select * from fc_listar_usuario()')
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al listar los usuarios')
    }
}

export const getUsuarioId = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const response = await pool.query('select * from fc_listar_usuario_id($1)', [id])
        return res.status(200).json(response.rows);

    } catch (e) {
        return res.status(500).json('Error al listar el usuario')
    }
}

export const createUsuario = async (req, res) => {
    try {
        const {username, password, idp, idr} = req.body;
        const response = await pool.query('select * from fc_create_usuario($1, $2, $3, $4)', [username, password, idp, idr])
        return res.status(200).json({
            message: 'Usuario registrado correctamente...!'
        });
    } catch (e) {
        return res.status(500).json('Error al crear el usuario...!')
    }
}

export const updateUsuario = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const {username, password, idr} = req.body;
        const response = await pool.query('select * from fc_update_usuario($1, $2, $3, $4)', [username, password, idr, id])
        return res.status(200).json({
            message: 'Usuario modificado correctamente...!'
        });
    } catch (e) {
        return res.status(500).json('Error al modificar el usuario...!')
    }
}

export const deleteUsuario = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const response = await pool.query('select * from fc_delete_usuario($1)', [id])
        return res.status(200).json({
            message: 'Usuario eliminado correctamente...!'
        });
    } catch (e) {
        return res.status(500).json('Error al eliminar la usuario...!')
    }
}
