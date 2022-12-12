from rest_framework.permissions import BasePermission

from user.models import MyOwnToken, User

class IsAuthenticated(BasePermission):
    def has_permission(self, request, view):

        user = view.kwargs.get('user_id')
        userToken = MyOwnToken.objects.filter(user_id=user)
        if userToken.exists():
            requestToken = request.META['HTTP_AUTHORIZATION']
            print(requestToken, userToken)
            if requestToken == userToken:
                return True
            else:
                return False
        else:
            return False


class BlocklistPermission(BasePermission):
    """
    Global permission check for blocked IPs.
    """

    def has_permission(self, request, view):
        ip_addr = request.META['REMOTE_ADDR']
        #blocked = Blocklist.objects.filter(ip_addr=ip_addr).exists()
        #return not blocked
    