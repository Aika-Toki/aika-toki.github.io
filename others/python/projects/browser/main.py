import sys
from PyQt5 import QtWidgets
from browserui import Ui_MainWindow
from PyQt5.QtCore import QUrl

class browserUI(QtWidgets.QMainWindow):
    def __init__(self,parent=None):
        super(browserUI, self).__init__(parent)
        self.ui = Ui_MainWindow()
        self.ui.setupUi(self)

    def webPageUpdate(self):
        self.ui.webEngineView.setUrl(QUrl(self.ui.lineEdit.text()))

    def urlLineSet(self, QUrl):
        self.ui.lineEdit.setText(self.ui.webEngineView.url().url())

if __name__ == '__main__':
    app = QtWidgets.QApplication(sys.argv)
    window = browserUI()
    window.show()
    sys.exit(app.exec_())