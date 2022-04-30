export class MongoCrud {
  /**
   *
   * @param {Object} schema a mongoose model
   */
  constructor(schema) {
    this.schema = schema;
  }
  /*--------------------------------------------------*/
  /*                     CREATE                       */
  /*--------------------------------------------------*/
  /**
   *
   * @param {Object, Array} Obj require an object or an object array
   * @returns a success message
   */
  async create(Obj) {
    const date = new Date();
    try {
      Obj.timestamp = `[${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}]`;
      const res = await this.schema.create(Obj);
      console.log(await res);
      return {
        message: "Successfully saved",
      };
    } catch (error) {
      console.error({ message: error });
    }
  }
  /*--------------------------------------------------*/
  /*                      READ                        */
  /*--------------------------------------------------*/
  /**
   * @param {Object} filter some key to filter in the data source
   * @returns an array of objects that matches the key parameter
   */
  async readAll(filter) {
    try {
      const res = await this.schema.find(filter);
      console.log(res);
      return await res;
    } catch (error) {
      console.error({ message: error });
    }
  }
  /**
   *
   * @param {Object} filter some key to filter in the data source
   * @returns an object that matches the key parameter
   */
  async readOne(filter) {
    try {
      const res = await this.schema.findOne(filter);
      console.log(res);
      return await res;
    } catch (error) {
      console.error({ message: error });
    }
  }
  /*--------------------------------------------------*/
  /*                     UPDATE                       */
  /*--------------------------------------------------*/
  async updateMany() {
    try {
      const res = await this.schema.updateMany();
      console.log(res);
      return {
        message: "Successfully updated",
      };
    } catch (error) {
      console.error({ message: error });
    }
  }
  async updateOne(filter, update) {
    try {
      const res = await this.schema.updateOne(filter, update);
      console.log(res);
      return {
        message: "Successfully updated",
      };
    } catch (error) {
      console.error({ message: error });
    }
  }
  /*--------------------------------------------------*/
  /*                     DELETE                       */
  /*--------------------------------------------------*/
  async deleteMany(filter) {
    try {
      const res = await this.schema.deleteMany(filter);
      console.log(res);
      return {
        message: "Successfully deleted",
      };
    } catch (error) {
      console.error({ message: error });
    }
  }
  async deleteOne(filter) {
    try {
      const res = await this.schema.deleteOne(filter);
      console.log(res);
      return {
        message: "Successfully deleted",
      };
    } catch (error) {
      console.error({ message: error });
    }
  }
}
