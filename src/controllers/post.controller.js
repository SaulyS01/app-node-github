import { pool } from '../database'

export const getPosts = async (req, res) => {
    try {
        const response = await pool.query('select * from fc_listar_post()')
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al listar posts')
    }
}

export const getPostId = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const response = await pool.query('select * from fc_listar_post_id($1)', [id])
        return res.status(200).json(response.rows);

    } catch (e) {
        return res.status(500).json('Error al listar posts')
    }
}

export const createPost = async (req, res) => {
    try {
        const {titulo, descripcion} = req.body;
        const response = await pool.query('select * from fc_create_post($1, $2)', [titulo, descripcion])
        return res.status(200).json({
            message: 'Post registrado correctamente...!'
        });
    } catch (e) {
        return res.status(500).json('Error al crear post...!')
    }
}

export const updatePost = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const {titulo, descripcion} = req.body;
        const response = await pool.query('select * from fc_update_post($1, $2, $3)', [titulo, descripcion, id])
        return res.status(200).json({
            message: 'Post modificado correctamente...!'
        });
    } catch (e) {
        return res.status(500).json('Error al modificar el post...!')
    }
}

export const deletePost = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const response = await pool.query('select * from fc_delete_post($1)', [id])
        return res.status(200).json({
            message: 'Post eliminado correctamente...!'
        });
    } catch (e) {
        return res.status(500).json('Error al eliminar el post...!')
    }
}

