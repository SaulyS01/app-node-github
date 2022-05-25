import { pool } from '../database'

export const getPersonas = async (req, res) => {
    try {
        const response = await pool.query('select * from fc_listar_persona()')
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al listar personas')
    }
}

export const getPersonaId = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const response = await pool.query('select * from fc_listar_persona_id($1)', [id])
        return res.status(200).json(response.rows);

    } catch (e) {
        return res.status(500).json('Error al listar la persona')
    }
}

export const createPersona = async (req, res) => {
    try {
        const {apellidos, nombres, direccion, telefono} = req.body;
        const response = await pool.query('select * from fc_create_persona($1, $2, $3, $4)', [apellidos, nombres, direccion, telefono])
        return res.status(200).json({
            message: 'Persona registrada correctamente...!'
        });
    } catch (e) {
        return res.status(500).json('Error al crear la persona...!')
    }
}

export const updatePersona = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const {apellidos, nombres, direccion, telefono} = req.body;
        const response = await pool.query('select * from fc_update_persona($1, $2, $3, $4, $5)', [apellidos, nombres, direccion, telefono, id])
        return res.status(200).json({
            message: 'Persona modificada correctamente...!'
        });
    } catch (e) {
        return res.status(500).json('Error al modificar la persona...!')
    }
}

export const deletePersona = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const response = await pool.query('select * from fc_delete_persona($1)', [id])
        return res.status(200).json({
            message: 'Persona eliminada correctamente...!'
        });
    } catch (e) {
        return res.status(500).json('Error al eliminar la persona...!')
    }
}
