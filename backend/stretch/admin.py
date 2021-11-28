from stretch.models import Stretch
from django.contrib import admin

class StretchAdmin(admin.ModelAdmin):
    list_display = ('hour', 'moto_count')
    list_filter = ('hour',)
    search_fields = ('hour',)


admin.site.register(Stretch, StretchAdmin)
