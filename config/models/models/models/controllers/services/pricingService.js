const Pricing = require('../models/pricing');

exports.calculatePrice = async (zone, organizationId, totalDistance, itemType) => {
  try {
    const pricing = await Pricing.findOne({ 
      where: { organization_id: organizationId, zone },
    });

    if (!pricing) {
      throw new Error('Pricing not found for the given organization and zone');
    }

    let totalPrice = pricing.fix_price;
    if (totalDistance > pricing.base_distance_in_km) {
      const additionalDistance = totalDistance - pricing.base_distance_in_km;
      const kmPrice = itemType === 'perishable' ? pricing.km_price : pricing.km_price / 2;
      totalPrice += additionalDistance * kmPrice;
    }

    return totalPrice * 100; // Convert to cents to avoid decimal issues
  } catch (error) {
    throw new Error(`Error calculating price: ${error.message}`);
  }
};
