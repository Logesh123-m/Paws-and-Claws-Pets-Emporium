from flask import *

import ibm_db

conn = ibm_db.connect("DATABASE=bludb;HOSTNAME=824dfd4d-99de-440d-9991-629c01b3832d.bs2io90l08kqb1od8lcg.databases.appdomain.cloud;PORT=30119;SECURITY=SSL;SSLServerCertificate=DigiCertGlobalRootCA.crt;UID=vjg07819;PWD=k6HM2982GtpYhZIQ","","")

print(conn)

app=Flask(__name__)

@app.route('/')
def home():
    return render_template("home.html")

@app.route('/adminhome')
def adminHome():
    return render_template("adminhome.html")


@app.route('/userhome')
def userHome():
    return render_template("userhome.html")


@app.route('/adminregister')
def adminRegister():
    return render_template("adminregister.html")


@app.route('/adminlogin')
def adminLogin():
    return render_template("adminlogin.html")

@app.route('/adminregister1',methods=['POST'])
def adminRegister1():
    x = [x for x in request.form.values()]
    print(x)
    NAME=x[0]
    EMAIL=x[1]
    PASSWORD=x[2]
    sql = "SELECT * FROM ADMINREGISTER WHERE EMAIL =?" 
    stmt = ibm_db.prepare(conn, sql)
    ibm_db.bind_param(stmt,1,EMAIL)
    ibm_db.execute(stmt)
    account = ibm_db.fetch_assoc(stmt)
    print(account)
    if account:
        return render_template('adminlogin.html', pred="You are already a member, please login usingyour details")
    else:
        insert_sql = "INSERT INTO ADMINREGISTER VALUES (?, ?, ?)" 
        prep_stmt = ibm_db.prepare(conn, insert_sql)
        ibm_db.bind_param(prep_stmt, 1, NAME)
        ibm_db.bind_param(prep_stmt, 2, EMAIL)
        ibm_db.bind_param(prep_stmt, 3, PASSWORD)
        ibm_db.execute(prep_stmt)
        return render_template('adminlogin.html', pred="Registration Successful, please login using your details")
    
    


@app.route('/adminPanel',methods=['POST'])
def adminPanel():
    EMAIL = request.form['email']   #name should be in same as form name
    PASSWORD = request.form['password']
    sql = "SELECT * FROM ADMINREGISTER WHERE EMAIL =? AND PASSWORD=?" 
    stmt = ibm_db.prepare(conn, sql)
    ibm_db.bind_param(stmt,1,EMAIL)
    ibm_db.bind_param(stmt,2,PASSWORD)
    ibm_db.execute(stmt)
    account = ibm_db.fetch_assoc(stmt)
    print (account)
    print(EMAIL,PASSWORD)
    if account:
        return render_template('adminPanel.html', pred="Login successful")
    else:
        return render_template('adminlogin.html', pred="Login unsuccessful. Incorrectusername/password !")



@app.route('/create_interface')
def create_interface():
    return render_template("create_interface.html")

@app.route('/AddPets')
def AddPets():
    return render_template("addPets.html")
@app.route('/addDog')
def addDog():
    return render_template("addDog.html")
@app.route('/addCat')
def addCat():
    return render_template("addCat.html")
@app.route('/addBird')
def addBird():
    return render_template("addBird.html")
@app.route('/addFish')
def addFish():
    return render_template("addFish.html")
@app.route('/addRabbit')
def addRabbit():
    return render_template("addRabbit.html")

@app.route('/createUser')
def createUser():
    return render_template("createUser.html")
@app.route('/view_orders')
def view_orders():
    query = "SELECT * FROM PURCHASE"
    stmt = ibm_db.exec_immediate(conn, query)
    result = ibm_db.fetch_assoc(stmt)

    data = []
    while result:
        data.append(result)
        result = ibm_db.fetch_assoc(stmt)

    # Close the database connection
    ibm_db.close(conn)

    print(data)

    # Pass the data to the template for rendering
    return render_template('view_orders.html', data=data)




#user work
@app.route('/userregister')
def userregister():
    return render_template("userregister.html")
@app.route('/userlogin')
def userlogin():
    return render_template("userlogin.html")

@app.route('/userregister1',methods=['POST'])
def userregister1():
    x = [x for x in request.form.values()]
    print(x)
    NAME=x[0]
    EMAIL=x[1]
    PASSWORD=x[2]
    sql = "SELECT * FROM USER_REGISTER WHERE EMAIL =?" 
    stmt = ibm_db.prepare(conn, sql)
    ibm_db.bind_param(stmt,1,EMAIL)
    ibm_db.execute(stmt)
    account = ibm_db.fetch_assoc(stmt)
    print(account)
    if account:
        return render_template('userlogin.html', pred="You are already a member, please login usingyour details")
    else:
        insert_sql = "INSERT INTO USER_REGISTER VALUES (?, ?, ?)" 
        prep_stmt = ibm_db.prepare(conn, insert_sql)
        ibm_db.bind_param(prep_stmt, 1, NAME)
        ibm_db.bind_param(prep_stmt, 2, EMAIL)
        ibm_db.bind_param(prep_stmt, 3, PASSWORD)
        ibm_db.execute(prep_stmt)
        return render_template('userlogin.html', pred="Registration Successful, please login using your details")
    
  


@app.route('/products',methods=['POST'])
def products():
    EMAIL = request.form['email']   #name should be in same as form name
    PASSWORD = request.form['password']
    sql = "SELECT * FROM USER_REGISTER WHERE EMAIL =? AND PASSWORD=?" 
    stmt = ibm_db.prepare(conn, sql)
    ibm_db.bind_param(stmt,1,EMAIL)
    ibm_db.bind_param(stmt,2,PASSWORD)
    ibm_db.execute(stmt)
    account = ibm_db.fetch_assoc(stmt)
    print (account)
    print(EMAIL,PASSWORD)
    if account:
        return render_template('products.html', pred="Login successful")
    else:
        return render_template('userlogin.html', pred="Login unsuccessful. Incorrectusername/password !")

@app.route('/dogShop')
def dogShop():
    return render_template("dogs.html")

@app.route('/catShop')
def catShop():
    return render_template("cats.html")

@app.route('/rabbitShop')
def rabbitShop():
    return render_template("rabbit.html")

@app.route('/fishShop')
def fishShop():
    return render_template("fish.html")

@app.route('/birdShop')
def birdShop():
    return render_template("bird.html")

@app.route('/purchase')
def purchase():
    return render_template("purchase.html")

@app.route('/purchasedetails',methods=['POST'])
def purchasedetails():
    x = [x for x in request.form.values()]
    print(x)
    if(len(x)>0):
        NAME=x[0]
        EMAIL=x[1]
        PHONE1=x[2]
        PHONE2=x[3]
        ADDRESS=x[4]
        
        IMAGEURL=x[5]
        COST=x[6]
        print(IMAGEURL)
    
        
        # sql = "SELECT * FROM PURCHASE WHERE EMAIL =?" 
        # stmt = ibm_db.prepare(conn, sql)
        # ibm_db.bind_param(stmt,1,EMAIL)
        # ibm_db.execute(stmt)
        # account = ibm_db.fetch_assoc(stmt)
        # print(account)
   
    
        insert_sql = "INSERT INTO PURCHASE VALUES (?, ?, ?,?,?,?,?)" 
        prep_stmt = ibm_db.prepare(conn, insert_sql)
        ibm_db.bind_param(prep_stmt, 1, NAME)
        ibm_db.bind_param(prep_stmt, 2, EMAIL)
        ibm_db.bind_param(prep_stmt, 3, PHONE1)
        ibm_db.bind_param(prep_stmt, 4, PHONE2)
        ibm_db.bind_param(prep_stmt, 5, ADDRESS)
        ibm_db.bind_param(prep_stmt, 6, IMAGEURL)
        ibm_db.bind_param(prep_stmt, 7, COST)
        ibm_db.execute(prep_stmt)
        return render_template('order_success.html', pred="Registration Successful, please login using your details")

    else:
        return render_template('purchase.html')



if __name__ == "__main__":
    app.run(host='0.0.0.0')