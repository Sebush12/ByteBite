from django.test import TestCase
from graphene.test import Client
from bytebite.schema import schema
from .models import FoodItem

class TestFoodItemsQuery(TestCase):
    def setUp(self):
        self.client = Client(schema)
        FoodItem.objects.create(name="Chicken Biryani", calories=360, protein=16, carbs=56, fat=8)
        FoodItem.objects.create(name="Greek Yogurt", calories=150, protein=19, carbs=9, fat=5)

    def test_allFoodItems(self):
        response = self.client.execute('''
            query {
                allFoodItems {
                    id
                    name
                    calories
                    protein
                    carbs
                    fat
                }
            }
        ''')

        self.assertIsNotNone(response)
        self.assertIn('data', response)
        if response['data']:
            self.assertIn('allFoodItems', response['data'])
            self.assertGreater(len(response['data'].get('allFoodItems', [])), 0)
