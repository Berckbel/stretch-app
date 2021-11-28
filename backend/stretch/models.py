from django.db import models
from account.models import UserAccount

class Stretch(models.Model):
    hour = models.TimeField()
    moto_count = models.IntegerField(default=8)
    users = models.ManyToManyField(UserAccount, verbose_name='list of users', blank=True)

    class Meta:
        ordering = ('hour',)

    def __str__(self):
        return str(self.hour)
    
    def get_users_id(self):
        users = self.users.all()
        users_id = [u.id for u in users]
        return users_id

