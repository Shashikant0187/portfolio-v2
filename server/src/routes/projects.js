const express = require("express");
const pool = require("../db");

const {
  authenticateToken,
  requireAdmin,
} = require("../middleware/auth");

const router = express.Router();


// GET /api/projects
// Public → all projects
router.get("/", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT *
      FROM projects
      ORDER BY created_at DESC
    `);

    res.json({
      projects: result.rows,
    });
  } catch (error) {
    console.error("Get projects error:", error);

    res.status(500).json({
      message: "Internal server error",
    });
  }
});


// POST /api/projects
// Admin only
router.post(
  "/",
  authenticateToken,
  requireAdmin,
  async (req, res) => {
    try {
      const {
        title,
        description,
        category,
        github_url,
        live_url,
        technologies,
      } = req.body;

      // Validate required fields
      if (!title || !description) {
        return res.status(400).json({
          message: "Title and description are required",
        });
      }

      const result = await pool.query(
        `
        INSERT INTO projects
        (
          title,
          description,
          category,
          visibility,
          github_url,
          live_url,
          technologies
        )
        VALUES ($1, $2, $3, 'public', $4, $5, $6)
        RETURNING *
        `,
        [
          title,
          description,
          category || null,
          github_url || null,
          live_url || null,
          technologies || null,
        ]
      );

      res.status(201).json({
        message: "Project created successfully",
        project: result.rows[0],
      });
    } catch (error) {
      console.error("Create project error:", error);

      res.status(500).json({
        message: "Internal server error",
      });
    }
  }
);


// PUT /api/projects/:id
// Admin only
router.put(
  "/:id",
  authenticateToken,
  requireAdmin,
  async (req, res) => {
    try {
      const { id } = req.params;

      const {
        title,
        description,
        category,
        github_url,
        live_url,
        technologies,
      } = req.body;

      // Validate required fields
      if (!title || !description) {
        return res.status(400).json({
          message: "Title and description are required",
        });
      }

      const result = await pool.query(
        `
        UPDATE projects
        SET
          title = $1,
          description = $2,
          category = $3,
          visibility = 'public',
          github_url = $4,
          live_url = $5,
          technologies = $6,
          updated_at = CURRENT_TIMESTAMP
        WHERE id = $7
        RETURNING *
        `,
        [
          title,
          description,
          category || null,
          github_url || null,
          live_url || null,
          technologies || null,
          id,
        ]
      );

      if (result.rows.length === 0) {
        return res.status(404).json({
          message: "Project not found",
        });
      }

      res.json({
        message: "Project updated successfully",
        project: result.rows[0],
      });
    } catch (error) {
      console.error("Update project error:", error);

      res.status(500).json({
        message: "Internal server error",
      });
    }
  }
);


// DELETE /api/projects/:id
// Admin only
router.delete(
  "/:id",
  authenticateToken,
  requireAdmin,
  async (req, res) => {
    try {
      const { id } = req.params;

      const result = await pool.query(
        `
        DELETE FROM projects
        WHERE id = $1
        RETURNING *
        `,
        [id]
      );

      if (result.rows.length === 0) {
        return res.status(404).json({
          message: "Project not found",
        });
      }

      res.json({
        message: "Project deleted successfully",
        project: result.rows[0],
      });
    } catch (error) {
      console.error("Delete project error:", error);

      res.status(500).json({
        message: "Internal server error",
      });
    }
  }
);


module.exports = router;