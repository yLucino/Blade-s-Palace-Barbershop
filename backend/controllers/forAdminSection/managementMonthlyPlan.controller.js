import { db } from "../../.env.js";

// API for MonthlyPlan PUT
// PUT
export const putMonthyPlanPriceFullPlan = (req, res) => {
  const priceFullPlanId = req.params.id;
  const { priceFullPlan } = req.body;

  const q = "UPDATE monthly_plans SET priceFullPlan = ? WHERE id = ?";

  db.query(q, [priceFullPlan, priceFullPlanId], (error) => {
    if (error) {
      console.log('Error when updating the priceFullPlan field:', error);
      return res.status(500).json({ error: 'Error updating monthly_plans.' });
    }

    res.status(200).json({ message: 'Price Full Plan updated successfully.' })
  });
}

export const putMonthyPlanPriceHalfPlan = (req, res) => {
  const priceHalfPlanId = req.params.id;
  const { priceHalfPlan } = req.body;

  const q = "UPDATE monthly_plans SET priceHalfPlan = ? WHERE id = ?";

  db.query(q, [priceHalfPlan, priceHalfPlanId], (error) => {
    if (error) {
      console.log('Error when updating the priceHalfPlan field:', error);
      return res.status(500).json({ error: 'Error updating monthly_plans.' });
    }

    res.status(200).json({ message: 'Price Half Plan updated successfully.' })
  });
}