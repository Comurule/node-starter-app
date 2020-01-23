/* eslint-disable class-methods-use-this */
class StatusController {
  /**
   * Creates an instance of StatusController.
   * @param {object} param
   * @memberof StatusController
   */

  /**
   * @param {object} req
   * @param {object} res
   *@returns {object} - status
   */
  async isUp(req, res) {
    return res.status(200).json({ status: 'OK' });
  }
}
export default StatusController;
