import express from "express";

import prisma from "./lib/index.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const owners = await prisma.owner.findMany();

    if (owners) {
      res.status(200).json(owners);
    } else {
      res.status(404).json({ message: "Owners not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Failed to get owners" });
  }
});

// Get Single Owner
router.get("/:id", async (req, res) => {
  try {
    const owner = await prisma.owner.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });

    if (owner) {
      res.status(200).json(owner);
    } else {
      res.status(404).json({ message: "Owner not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Failed to get owner" });
  }
});

// Add Owner
router.post("/", async (req, res) => {
  try {
    const owner = await prisma.owner.create({
      data: req.body,
    });

    res.status(201).json(owner);
  } catch (err) {
    res.status(500).json({ message: "Failed to add owner" });
  }
});

// Update Owner
router.put("/:id", async (req, res) => {
  try {
    const owner = await prisma.owner.update({
      where: {
        id: Number(req.params.id),
      },
      data: req.body,
    });

    if (owner) {
      res.status(200).json(owner);
    } else {
      res.status(404).json({ message: "Owner not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Failed to update owner" });
  }
});

// Delete Owner
router.delete("/:id", async (req, res) => {
  try {
    const owner = await prisma.owner.delete({
      where: {
        id: Number(req.params.id),
      },
    });

    if (owner) {
      res.status(200).json({ message: "Owner deleted" });
    } else {
      res.status(404).json({ message: "Owner not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Failed to delete owner" });
  }
});

export default router;
